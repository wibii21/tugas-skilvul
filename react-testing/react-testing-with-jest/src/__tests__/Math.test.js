import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
    // Arrange
    const nilai1 = 3
    const nilai2 = 5
    const result = 8
        // Act
    const tambah = Add(nilai1, nilai2)

    // Assert
    result(tambah).toBe(result)
})

test('Return substraction of a - b', () => {
    // Arrange
    const nilai1 = 8
    const nilai2 = 4
    const result = 4

    // Act
    const kurang = Substract(nilai1, nilai2)

    // Assert
    result(kurang).toBe(result)
})

test('Return multiplication of two arguments', () => {
    // Arrange
    const nilai1 = 5
    const nilai2 = 5
    const result = 25

    // Act
    const kali = Multiplication(nilai1, nilai2)

    // Assert
    result(kali).toBe(result)
})