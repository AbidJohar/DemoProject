from sklearn.feature_extraction.text import CountVectorizer,TfidfTransformer

 
cv = CountVectorizer()

 
doc = [
  "My name is Abid",
  "His name is Fazeel",
  "Your name is what",
]

word_count = cv.fit_transform(doc)

# print(f'word: {word_count}')
tfidf = TfidfTransformer()

tfidf_score = tfidf.fit_transform(word_count)

print(tfidf_score)

