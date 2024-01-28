let mealDet = document.getElementById("mealDetails");

function openNavBar() {
    $(".nav-bar").animate({ left: 0 }, 500);

    $(".icon-change-x").removeClass("fa-align-justify");
    $(".icon-change-x").addClass("fa-x");

    $(".nav-links li").eq(0).animate({ top: 0 }, 550);
    $(".nav-links li").eq(1).animate({ top: 0 }, 650);
    $(".nav-links li").eq(2).animate({ top: 0 }, 750);
    $(".nav-links li").eq(3).animate({ top: 0 }, 850);
    $(".nav-links li").eq(4).animate({ top: 0 }, 950);
}

function closeNavBar() {
    // var sideNav = document.getElementById("main-nav");
    // sideNav.animate([{ width: '250px' }, { width: '0' }], {
    //     duration: 500
    // });

    let barWidth = $(".nav-bar .main-nav").outerWidth();
    $(".nav-bar").animate({ left: -barWidth }, 500);

    $(".icon-change-x").addClass("fa-align-justify");
    $(".icon-change-x").removeClass("fa-x");

    $(".nav-links li").animate({ top: 300 }, 500);
}
closeNavBar();

$(".nav-bar i.icon-change-x").click(() => {

    if ($(".nav-bar").css("left") == "0px") closeNavBar();

    else openNavBar();
})

async function getMealByName(mealName) {
    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    x = await x.json();

    // console.log(x.meals);
    displayMeals(x.meals);
}

function displayMeals(mealsArray) {
    let allMeals = "";

    for (let i = 0; i < mealsArray.length; i++) {
        allMeals += `<div class="col-md-3">
        <div class="meal position-relative rounded-2 overflow-hidden">
            <img src="${mealsArray[i].strMealThumb}" alt="" class="w-100">

            <div class="meal-layer position-absolute text-black d-flex align-items-center">
                <h3 class="px-2">${mealsArray[i].strMeal}</h3>
            </div>
        </div>
    </div>`
    }
    mealDet.innerHTML = allMeals;
}
getMealByName("");

function openSearchPage() {
    document.getElementById("homePage").style.display = "none";
}
