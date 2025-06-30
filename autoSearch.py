import pyautogui
import time
import random
import string

# List of window numbers
win_keys = [6,7]

# Function to generate a random string of given length
def random_string(length=11):
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for _ in range(length))

# Function to simulate search operation
def operate_search():
    pyautogui.hotkey('ctrl', 't')
    time.sleep(0.5)
    pyautogui.write(random_string())
    time.sleep(0.5)
    
    pyautogui.press('enter')
    time.sleep(0.5)

# Initial delays for each window
initial_delay = 3
for num in win_keys:
    pyautogui.hotkey('win', str(num))
    time.sleep(initial_delay)

# Timeout settings
OPERATE_SEARCH_TIMEOUT = 0.2
CLOSING_TIMEOUT = 0.3
iterations = 30



# Main loop
for i in range(iterations):
    for num in win_keys:
        pyautogui.hotkey('win', str(num))
        time.sleep(CLOSING_TIMEOUT)
        
        if i != 0:  # Close the previous tab except for the first iteration
            pyautogui.hotkey('ctrl', 'w')
            time.sleep(CLOSING_TIMEOUT)
        
        operate_search()
        time.sleep(OPERATE_SEARCH_TIMEOUT)
    time.sleep(4)  # Additional delay between iterations

# Final cleanup: Close all tabs
for num in win_keys:
    pyautogui.hotkey('win', str(num))
    time.sleep(CLOSING_TIMEOUT)
    pyautogui.hotkey('ctrl', 'w')
    time.sleep(CLOSING_TIMEOUT)

# _____________(for single browser search )___________________
# import pyautogui
# import time
# import random
# import string

# # Function to generate a random string
# def random_string(length=11):
#     letters = string.ascii_letters
#     return ''.join(random.choice(letters) for _ in range(length))

# # Wait a few seconds before starting (optional)
# time.sleep(3)

# # Open a new tab
# pyautogui.hotkey('ctrl', 't')
# time.sleep(3)

# # Perform 30 searches
# for _ in range(30):
#     # Focus the address/search bar
#     pyautogui.hotkey('ctrl', 'l')
#     time.sleep(1)
    
#     # Type the random query
#     pyautogui.write(random_string())
#     time.sleep(1)

#     # Press Enter to search
#     pyautogui.press('enter')
#     time.sleep(3)  # Wait for the page to load a bit

# # Close the tab at the end
# pyautogui.hotkey('ctrl', 'w')

