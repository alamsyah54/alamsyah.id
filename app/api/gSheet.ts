import { google } from "googleapis"

const auth = new google.auth.GoogleAuth({
    projectId: process.env.GOOGLE_SHEETS_PROJECT_ID,
    credentials: {
        type: "service_account",
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
        token_url: "https://oauth2.googleapis.com/token",
        universe_domain: "googleapis.com",
    },
    scopes: [
        "https://www.googleapis.com/auth/spreadsheets.readonly",
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
    ], // Adjust scopes as needed
})

const sheets = google.sheets({ version: "v4", auth })

export const readSheetData = async () => {
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: process.env.PRIVATE_SHEETS, // Adjust range as needed
        })
        const data = response.data.values
        console.log(data)
        return data
        // Process the data here
    } catch (error) {
        console.error(error)
        throw error
    }
}
