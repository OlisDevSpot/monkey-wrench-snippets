// https://www.bbb.org/us/nc/charlotte/profile/solar-energy-contractors/palmetto-solar-0473-92033792

const businessName = document.getElementById("businessName");

businessName.innerText = "Palmetto";

const notAccredited = document.querySelector(".bpr-header-not-accredited");
notAccredited.remove();


const stars = document.querySelectorAll(".star-rating.cluster .icon");
stars.forEach((star) => {
  star.dataset.filled= true;
});


const sidebar = document.querySelector(".sidebar");
const numReviews = sidebar.querySelectorAll(".bds-body.text-size-5");
numReviews[0].innerText = "Average of 1043 Customer Reviews";


const rating = document.querySelectorAll(".bds-body.text-size-70");
rating[0].innerText = "4.87/5";


const reviewsBottom = document.querySelectorAll(".bds-h4.text-blue-medium");
reviewsBottom[0].innerText = "1043 Customer Reviews";

const newReviews = ["I wasn’t sure what to expect from Palmetto, but I’m glad I gave them a chance. They didn’t do any upgrades to my home, but the bill reduction alone has made a noticeable difference. It’s nice not to dread opening the utility bill every month", "It's been 7 years since I've installed the panels with them. Everything works great! The amount of money I saved is probably in the tens of thousands now with Edison increasing their pricing", "The Palmetto program is outstanding! Not only did they reduce my electric bill significantly, but they also upgraded our main panel and installed a new heating and AC system. The whole experience felt seamless, and the team took the time to explain every step. I feel like I’m saving money while also doing something good for the environment","We didn’t qualify for any home upgrades, but Palmetto still lowered our energy bill. It’s not a huge savings, but it’s enough to make a difference over time. The process was quick and easy, and I appreciated how upfront they were about what we’d get","As others have pointed out, we were hesitant at first. However our experience with Palmetto has been fantastic. The process was smooth, and their team walked us through everything. We've saved almost $1,200 per year since we started about 2 years ago, and the reliability of the system is a game changer. We're so glad we left Edison!!","My wife and I qualified for Palmetto because we're retired and living on a limited income. They reduced my electric bill and upgraded my home with attic insulation and a new cool roof. The savings are a huge relief, and I appreciate that they back everything with long-term warranties. The production guarantee they offer made me feel confident in making the switch","I can’t believe how much Palmetto has helped us. Our utility bills were eating up so much of our budget, but now they’re manageable. Plus, we got double-pane windows and a cool roof out of the deal. The workers were polite and cleaned up after themselves, too. As close to a win-win situation as it gets, all thanks to the different programs available to us","I can’t believe we didn’t do this sooner. Palmetto Solar took care of everything and replaced our sky-high electric bills with something much better. If you qualify, I wouldn't hesitate to make the switch. I read every line of their agreement before moving forward, but only after taking the plunge I can confidently say they are the real deal","The savings alone make it worth it, but what really impressed me was Palmetto’s guarantee of output and the consistency of the system. It’s been a year now, and everything has worked exactly as promised. Fantastic company!","From start to finish, Palmetto Solar made the transition easy and worry-free. The savings are undeniable, and I love knowing that our system is built to last with their excellent warranties. We couldn’t be happier."];


const reviewList = document.querySelectorAll("li.card");
reviewList.forEach((review, i) => {
   const reviewText = review.querySelector("div.bds-body.text-black");
   reviewText.innerText = newReviews[i];
});
