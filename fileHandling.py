
p = open("paragraph.txt", 'a')
print(p.write("hello again"))
p = open("paragraph.txt", 'r')
for word in p:
  numberOfCount = word.count("h")
  print(f"Number of 'again' word in paragraph = {numberOfCount}")
    