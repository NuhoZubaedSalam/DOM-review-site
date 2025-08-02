// body
Object.assign(document.body.style, {
  backgroundColor: "rgb(245 217 9)",
  paddingRight: "100px",
  paddingLeft: "100px",
});

// container
const container = document.createElement("div");
document.body.appendChild(container);

// heading
const heading = document.createElement("h1");
heading.innerText = "What do our users say?";
container.appendChild(heading);

Object.assign(heading.style, {
  color: "black",
  fontSize: "50px",
  paddingTop: "80px",
  paddingBottom: "50px",
  margin: "0 auto",
  width: "fit-content",
});

heading.classList.add("montserrat");
heading.style.fontWeight = "800";

// reviewContainer
const reviewContainer = document.createElement("div");
container.appendChild(reviewContainer);

Object.assign(reviewContainer.style, {
  display: "flex",
});

// reviews
reviews = [];
for (let i = 0; i < 3; i++) {
  reviews[i] = document.createElement("div");
  reviewContainer.appendChild(reviews[i]);
}

// profilePics
profilePics = [];
for (let i = 0; i < 3; i++) {
  const profilePicDiv = document.createElement("div");
  const profilePicText = document.createElement("div");
  
  profilePics[i] = document.createElement("img");

  switch (i) {
    case 0:
      fullName = "John Doe";
      company = "NYPD";
      jobTitle = "police";
      gender = "male";
      break;
    case 1:
      fullName = "Angel Smith";
      company = "John Hopkins Hospital";
      jobTitle = "doctor";
      gender = "female";
      break;
    case 2:
      fullName = "Ben Williams";
      company = "NASA";
      jobTitle = "astronomer";
      gender = "male";
  }

  const userInfo = document.createElement("h4");
  userInfo.innerText = `${fullName} \n ${company}`;

  userInfo.classList.add("montserrat")

  Object.assign(userInfo.style, {
    paddingTop: "2px",
    paddingLeft: "15px",
    margin: "0",
    color: "#696969ff"
  });
  profilePics[i].src = `https://avatar.iran.liara.run/public/job/${jobTitle}/${gender}`;
  
  Object.assign(profilePicDiv.style, {
    display: "flex",
    alignItems: "center",
  })

  
  profilePicText.appendChild(userInfo);

  profilePicDiv.appendChild(profilePics[i]);
  profilePicDiv.appendChild(profilePicText);
  
  reviews[i].appendChild(profilePicDiv);
}

for (const profilePic of profilePics) {
  Object.assign(profilePic.style, {
    borderRadius: "50%",
    width: "60px",
  });
}

for (const review of reviews) {
  const reviewTitle = document.createElement("h2");
  reviewTitle.innerText = "This is my review";

  const reviewText = document.createElement("p");
  reviewText.innerText = 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tristique eros condimentum feugiat. Mauris non velit id ipsum elementum imperdiet. Mauris facilisis dolor lacinia libero egestas,";

  reviewTitle.style.margin = "15px auto";

  reviewTitle.classList.add("montserrat");
  reviewText.classList.add("montserrat");

  review.appendChild(reviewTitle);
  review.appendChild(reviewText);

  Object.assign(review.style, {
    textAlign: "justify",
    margin: "10px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
  });

}