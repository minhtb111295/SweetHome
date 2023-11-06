// Company Check
function showByCompany() {
    $(".company").css("display", "block");
    $(".company").css("display", "flex");
    $(".contructor").css("display", "none");
    $(".team").css("display", "none");
}

// Contructor Check
function showByContructor() {
    $(".contructor").css("display", "block");
    $(".contructor").css("display", "flex");
    $(".company").css("display", "none");
    $(".team").css("display", "none");
}

// Team Check
function showByTeam() {
    $(".team").css("display", "block");
    $(".team").css("display", "flex");
    $(".company").css("display", "none");
    $(".contructor").css("display", "none");
}