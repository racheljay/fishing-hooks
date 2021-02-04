# Fishing Hooks

## Requirements
1. Use React Hooks to handle state management and lifecycle
2. Keep track of what "page" you are currently on
3. Block access to "submit" page until shipping info filled out
4. Keep running total and update as user changes their order form (Initially, the total should be 0) 
5. When the user clicks a service, hilight that service and add it's cost to the total.
6. Calculate sales tax.

## Objects

- Navbar to navigate pages
    - items
        - render JSON Object with names and prices
        - on click "add to cart"
    - accessories
    - shipping
        - similar to items and accessories but with a checkout button that unlocks the submit
    - submit
        - some sort of form
        - add tax at the end or as a live update

- Another nav to "display cart"
    - show number of items and total cost

- Cart is an array or object in state that will collect selected 