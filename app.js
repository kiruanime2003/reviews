document.addEventListener("DOMContentLoaded", ()=>{

    const dataObject=[
        {
            profilePhoto: "Images/Profile-photo-1.jpg",
            name: "Rakesh yua",
            designation: "Front-end web developer",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien. Ultrices vitae auctor eu augue ut lectus arcu bibendum."
        },

        {
            profilePhoto: "Images/Profile-photo-2.jpg",
            name: "Lude roy",
            designation: "Full-stack designer",
            review: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, ut labore et dolore magna aliqua. Nunc aliquet bibendum enim facilisis gravida neque. In est ante in nibh mauris cursus mattis."
        },

        {
            profilePhoto: "Images/Profile-photo-3.jpg",
            name: "Dalore jez",
            designation: "Back-end web developer",
            review: "Porttitor lacus luctus accumsan lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat. Sagittis eu volutpat odio facilisis mauris."
        }
    ];

    var leftChevron = document.getElementById("left");
    var rightChevron = document.getElementById("right");
    var profileImage = document.querySelector("img");
    var nameOfPerson = document.querySelector("h2");
    var designationOfPerson = document.querySelector("h3");
    var reviewOfPerson =  document.querySelector("p");
    var count=0;

    leftChevron.addEventListener("click", previousReview);
    rightChevron.addEventListener("click", nextReview);
    
    function previousReview(){
        count--;
        if(count<0) count=2;
        console.log(count);
        profileImage.src = dataObject[count].profilePhoto;
        nameOfPerson.innerHTML = dataObject[count].name;
        designationOfPerson.innerHTML = dataObject[count].designation;
        reviewOfPerson.innerHTML = dataObject[count].review;
    };

    function nextReview(){
        count++;
        if(count>2) count=0;
        console.log(count);
        profileImage.src = dataObject[count].profilePhoto;
        nameOfPerson.innerHTML = dataObject[count].name;
        designationOfPerson.innerHTML = dataObject[count].designation;
        reviewOfPerson.innerHTML = dataObject[count].review;
    };
});