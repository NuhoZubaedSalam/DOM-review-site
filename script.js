// body
Object.assign(document.body.style, {
        backgroundColor: "rgb(245 217 9)",
        paddingRight: "100px",
        paddingLeft: "100px"
    }
)

// container
const container = document.createElement('div')
document.body.appendChild(container)

// heading
const heading = document.createElement("h1")
heading.innerText = "What do our users say?"
container.appendChild(heading)

Object.assign(heading.style, {
        color: "black",
        fontSize: "50px",
        paddingTop: "50px",
        margin: "0 auto",
        width: "fit-content", 
        paddingBottom: "35px"
    }
)

heading.classList.add("montserrat-heading")

// reviewContainer
const reviewContainer = document.createElement("div");
container.appendChild(reviewContainer)

Object.assign(reviewContainer.style, {
       display: "flex"
    }
)

// reviews
reviews = []
for (let i = 0; i < 3; i++) {
    reviews[i] = document.createElement('div') 
    reviewContainer.appendChild(reviews[i])
}

for (const review of reviews) {
    const reviewTitle = document.createElement("h2")
    reviewTitle.innerText = "This is my review"
    
    const reviewText = document.createElement("p")
    reviewText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tristique eros condimentum feugiat. Mauris non velit id ipsum elementum imperdiet. Mauris facilisis dolor lacinia libero egestas,"

    review.appendChild(reviewTitle)    
    review.appendChild(reviewText)

    Object.assign(review.style, {
            textAlign: "justify",
            margin: "10px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
        }
    )

     
}


