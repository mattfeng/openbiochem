
answers = {}
with open('2020-local.txt') as f:
    for idx, line in enumerate(f, 1):
        answers[idx] = line.strip()

while True:
    i = int(input('question > '))
    print(answers[i])
