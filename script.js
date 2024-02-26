const container = document.querySelector(".heroCont");
const children = document.querySelectorAll(".item");

let currentIndex = 0;

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

function cart1() {
    currentIndex = (currentIndex + 1) % children.length;
    updateClassesOnPrev1();
};

function updateClassesOnPrev1() {
    children.forEach((child, index) => {
        const newIndex = (index - currentIndex + children.length) % children.length + 1;
        child.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `car1`, `car2`, `car3`, `car4`, `carrrr1`, `carrrr2`, `carrrr3`, `carrrr4`, `carrr1`, `carrr2`, `carrr3`, `carrr4`);
        child.classList.add(`car${newIndex}`);
    });
}

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

function cart2() {
    currentIndex = (currentIndex + 1) % children.length;
    updateClassesOnPrev2();
};

function updateClassesOnPrev2() {
    children.forEach((child, index) => {
        const newIndex = (index - currentIndex + children.length) % children.length + 1;
        child.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `car1`, `car2`, `car3`, `car4`, `carrrr1`, `carrrr2`, `carrrr3`, `carrrr4`, `carrr1`, `carrr2`, `carrr3`, `carrr4`);
        child.classList.add(`carr${newIndex}`);
    });
}

function cart3() {
    currentIndex = (currentIndex + 1) % children.length;
    updateClassesOnPrev3();
};

function updateClassesOnPrev3() {
    children.forEach((child, index) => {
        const newIndex = (index - currentIndex + children.length) % children.length + 1;
        child.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `car1`, `car2`, `car3`, `car4`, `carrrr1`, `carrrr2`, `carrrr3`, `carrrr4`, `carrr1`, `carrr2`, `carrr3`, `carrr4`);
        child.classList.add(`carrr${newIndex}`);
    });
}

function cart4() {
    currentIndex = (currentIndex + 1) % children.length;
    updateClassesOnPrev4();
};

function updateClassesOnPrev4() {
    children.forEach((child, index) => {
        const newIndex = (index - currentIndex + children.length) % children.length + 1;
        child.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `car1`, `car2`, `car3`, `car4`, `carrrr1`, `carrrr2`, `carrrr3`, `carrrr4`, `carrr1`, `carrr2`, `carrr3`, `carrr4`);
        child.classList.add(`carrrr${newIndex}`);
    });
}
