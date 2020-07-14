export const reviewBudget = (budget, rest) => {
    let color;

    if ((budget / 4) > rest) {
        color = 'alert alert-danger';
    } else if ((budget / 2) > rest) {
        color = 'alert alert-warning';
    } else {
        color = 'alert alert-success';
    }
    return color
}