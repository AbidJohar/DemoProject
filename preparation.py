findword = "is"
count = 0
x= open("paragraph.txt","r" )

content =x.read()

word = content.split(" ")
print(word)
for i in word:
    print(i)
    if i == findword:
        count +=1

print("Number of is repeated:",count)

 


 