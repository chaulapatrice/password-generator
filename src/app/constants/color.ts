export type Color =
    'red'
    | 'orange'
    | 'yellow'
    | 'neon-green'
    | 'almost-white'
    | 'grey'
    | 'dark-grey'
    | 'very-dark-grey'

export const getColor = (color: Color) => {
    switch (color) {
        case 'red':
            return '#F64A4A'
        case 'orange':
            return '#FB7C58'
        case 'neon-green':
            return '#A4FFAF'
        case 'almost-white':
            return '#E6E5EA'
        case 'grey':
            return '#817D92'
        case 'dark-grey':
            return '#24232C'
        case 'very-dark-grey':
            return '#18171F'
    }
}