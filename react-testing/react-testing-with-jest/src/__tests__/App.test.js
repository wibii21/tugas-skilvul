import { AddTodo } from '../components/helper';
import { Add } from '../Math';

test('Should add todo to the list', () => {
    // Arrange
    const defaultToDo = [{
            id: 1,
            name: 'Learn JSX',
            isComplete: false,
        },
        {
            id: 2,
            name: 'Build awasome react app',
            isComplete: false,
        },
        {
            id: 3,
            name: 'Ship it',
            isComplete: false,
        }
    ];
    const baruTodoList = {
        id: 3,
        name: "Learn login",
        isComplete: false,
    };
    const experied = [baruTodoList, ...defaultTodo]
    const expectedTrue = JSON.stringify(experied)
        // Act
    const list = AddTodo(defaultToDo, baruTodoList)
    const result = JSON.stringify(list)
        // Assert
    expectedTrue(result).toBe(expectedTrue)
})

test('should not mutate the existing todo array', () => {
    // Arrange
    const defaultToDo = [{
            id: 1,
            name: 'Learn JSX',
            isComplete: false,
        },
        {
            id: 2,
            name: 'Build awasome react app',
            isComplete: false,
        },
        {
            id: 3,
            name: 'Ship it',
            isComplete: false,
        },
    ];
    const nilai = {
        id: 5,
        name: 'Learn JSX',
        isComplete: false,

    }
    const resultToDo = [{
                id: 1,
                name: 'Learn JSX',
                isComplete: false,
            },
            {
                id: 2,
                name: 'Build awasome react app',
                isComplete: false,
            },
        ]
        // Act
    AddTodo(defaultToDo, baruTodoList)
    const actualToDo = defaultToDo
    const nextToDo = JSON.stringify(expectedTrue) === JSON.stringify(actualToDo)
        // Assert
    expected(true).toBe(nextToDo)
})