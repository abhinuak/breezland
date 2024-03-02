document.getElementById("mobView").addEventListener("click", () => 
{
    const nav = document.getElementById("nav-MobView");
    nav.classList.remove("nav-MobView");
    nav.classList.add("nav-bar");
})
document.getElementById("lapView").addEventListener("click", () =>
 {
    const nav = document.getElementById("nav-MobView");
    nav.classList.add("nav-MobView");
    nav.classList.remove("nav-bar");
})