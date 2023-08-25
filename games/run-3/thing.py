chunk_size = int(input("Enter chunk size: "))  # Get user-defined chunk size

with open("Run3.js", "r") as input_file:  # Open input file for reading
    text = input_file.read()  # Read input file

chunks = [text[i:i+chunk_size] for i in range(0, len(text), chunk_size)]  # Split text into chunks

for i, chunk in enumerate(chunks):
    with open("output_file.txt", "a") as output_file:  # Open output file for writing
        output_file.write(chunk + "\n\n\n")  # Write chunk to output file
