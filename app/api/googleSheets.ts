import { google } from "googleapis"

export async function getGoogleSheetsData(
    spreadsheetId: string,
    range: string,
) {
    const auth = await google.auth.getClient({
        projectId: process.env.GOOGLE_SHEETS_PROJECT_ID,
        credentials: {
            type: "service_account",
            private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
            client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
            token_url: "https://oauth2.googleapis.com/token",
            universe_domain: "googleapis.com",
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    const getData = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
    })

    return getData.data.values
}
export function censorEmail(email: string): string {
    // Ensure email has a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return email // Return the original email if it's not valid
    }

    // Extract username and domain
    const [username, domain] = email.split("@")

    // Censor username
    const censoredUsername =
        username.slice(0, 2) + "*".repeat(6) + username.slice(-1)
    return `${censoredUsername}@${domain}`
}

export function censorPassword(password: string, censor: number): string {
    // Ensure password has at least 2 characters
    if (password.length < 2) {
        return password // Return the original password if too short
    }

    // Extract first and last character
    const firstChar = password[0]
    const lastChar = password[password.length - 1]

    // Censor with asterisks between first and last character
    const censoredPassword = firstChar + "*".repeat(censor) + lastChar

    return censoredPassword
}

function formatData(data: string[][]): string[][] {
    const formattedData = data.map((row) => {
        return row.map((cell, index) => {
            if (index === 1) {
                return cell
            } else if (index === 3 && typeof cell === "string") {
                return cell
            } else {
                return cell
            }
        })
    })

    return formattedData
}
export const fetchData = async () => {
    const dataPivate = (await getGoogleSheetsData(
        process.env.SPREADSHEET_ID as string,
        process.env.PRIVATE_SHEETS as string,
    )) as string[][]

    const dataShared = (await getGoogleSheetsData(
        process.env.SPREADSHEET_ID as string,
        process.env.SHARED_SHEETS as string,
    )) as string[][]

    const PrivateFormated = formatData(dataPivate)
    const SharedFormated = formatData(dataShared)
    const Private = PrivateFormated.slice(1)
    const Shared = SharedFormated.slice(1)
    const Data = [...Private, ...Shared].sort((a: any, b: any) => a[4] - b[4])
    const totalPrivateAccounts = Private.length
    const totalSharedAccounts = Shared.length
    const totalccounts = Data.length
    console.log("///////////////////////////////////")
    console.log(Data)
    console.log("///////////////////////////////////")
    console.log("totalPrivateAccounts ///", totalPrivateAccounts)
    console.log("totalSharedAccounts ///", totalSharedAccounts)
    console.log("totalccounts ///", totalccounts)
    return { Data, totalPrivateAccounts, totalSharedAccounts, totalccounts }
}
