const button = document.getElementById("connect-button");
const fields = document.getElementById("data-fields");
const wallet = document.getElementById("wallet-connect");
const go = document.getElementById("go");

gsap.from(".desc > p, .desc-about > p, .body, .go", 
2, {
    y: "200",
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0,
    stagger: 0.08,
    }
);

gsap.from(".arrow-img img", 1, {
    scale: 0,
    ease: Elastic.easeOut,
    delay: 3,
});

button.addEventListener("click",() => {
    gsap.to(go, { opacity: 1, delay: 1, stagger: 0.08 });
});

go.addEventListener("click",() => {
    gsap.to(fields, 1, {width: 'auto', padding: 10, ease: Power2.easeInOut}, {width: 0, padding: 0, transformOrigin: '100% 0%', ease: Power2.easeInOut});
});



go.addEventListener("click", () => {
    gsap.to(fields, { opacity: 1, delay: 1, stagger: 0.08 });
    gsap.to(wallet, { opacity: 1, delay: 1, stagger: 0.08 });
    gsap.from(".data-fields > div, .fields1 > input, .fields1 > button", 
2, {
    y: "50",
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0,
    stagger: 0.04,
    }
);
});