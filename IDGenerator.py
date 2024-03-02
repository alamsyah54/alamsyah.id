import random

def generate_random_name():
  """Generates a random 2-character name using digits '0' and '1'."""
  digits = "10101"
  return "".join(random.choices(digits, k=2))

# Specify the number of names to generate
num_names = 900  # Adjust this number as needed

# Open the file for writing
with open("random.txt", "w") as f:
  # Generate and write each name to the file
  for _ in range(num_names):
    name = 'A' + generate_random_name() + generate_random_name() + generate_random_name() + generate_random_name() +  generate_random_name() + generate_random_name() + generate_random_name() + generate_random_name() * 2 + "ID"
    f.write(name + "\n")

print(f"Generated and saved {num_names} random names to 'random.txt'")
