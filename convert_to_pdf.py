import os
import subprocess
import sys

# This script assumes 'wkhtmltopdf' is installed or Chrome is available.
# Since we know `pdflatex` is missing, we will try to use a simple approach 
# or just inform the user to print from browser if dependencies are hard.

# Actually, the most reliable way for a user without Latex is to open HTMLs and print.
# But I will create a script that ATTEMPTS to use macOS's built-in 'cupsfilter' or similar if available?
# No, that's risky.

# Let's try to use 'pandoc' with 'wkhtmltopdf' if available. 
# If not, we will rely on the HTMLs.

def convert_html_to_pdf(html_file):
    pdf_file = html_file.replace('.html', '.pdf')
    print(f"Converting {html_file} to {pdf_file}...")
    
    # Try using a headless chrome command if on mac
    # Common path for Chrome on macOS
    chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    
    if os.path.exists(chrome_path):
        try:
             subprocess.run([
                chrome_path,
                "--headless",
                "--disable-gpu",
                f"--print-to-pdf={pdf_file}",
                html_file
            ], check=True)
             print(f"Successfully created {pdf_file}")
             return
        except subprocess.CalledProcessError:
            print("Chrome conversion failed.")
    
    print("Could not find Google Chrome for headless conversion. Please open the HTML file and 'Print to PDF' manually.")

def main():
    directory = "presentation_materials"
    if not os.path.exists(directory):
        print(f"Directory {directory} not found.")
        return

    # Convert all HTML files
    for filename in os.listdir(directory):
        if filename.endswith(".html"):
            convert_html_to_pdf(os.path.join(directory, filename))

if __name__ == "__main__":
    main()
