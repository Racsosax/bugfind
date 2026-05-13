from math import sqrt
import numpy as np

y = np.array([3.73, 3.53, 3.75, 3.63, 3.82])
n = len(y)
y_snitt = sum(y) / n
s = sqrt(sum((y - y_snitt)**2) / (n-1))

print("gjennomsnittet er: ", round(y_snitt, 2))
print("Standardavvik er: ", round(s, 2))
