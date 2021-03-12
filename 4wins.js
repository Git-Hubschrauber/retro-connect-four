(function () {
    var currentPlayer = "player1";
    activePlayerDisplay = $("h2");
    activePlayerDisplay.text("Player 1' turn");
    resetBtn = $("button");
    var slots = $(".slot");

    function reset() {
        $(".slot").removeClass("player1");
        $(".slot").removeClass("player2");
        $(".slot").removeClass("victory");
        $(".overlay").css({ visibility: "hidden" });
        currentPlayer = "player1";
        currentPlayer = "player1";
        activePlayerDisplay.text("Player 1's turn");
        $(".coin").css({ "background-color": "red" });
        $(".winMessage").css({ color: "red" });
        $(".winMessage").css({ color: "red" });
        $(".newGame").css({ color: "red", border: "red" });
        $(".playWithKeyboard").css({ visibility: "visible" });
        $(".gridNumber").css({ visibility: "hidden" });
        $(".keyboardPlay").css({ visibility: "hidden" });
    }

    resetBtn.click(function () {
        reset();
    });

    $(".newGame").click(function () {
        reset();
    });

    columns = $(".column");

    $(document).on("keydown", function () {
        if (event.which == 75) {
            $(".playWithKeyboard").css({ visibility: "hidden" });
            $(".gridNumber").css({ visibility: "visible" });
            $(".keyboardPlay").css({ visibility: "visible" });
        }

        if (event.which == 78) {
            reset();
        }
        if (event.which == 49) {
            inputWithNumber(1);
            victoryCheck(slots);
            switchPlayer();
        }
        if (event.which == 50) {
            inputWithNumber(2);
            victoryCheck(slots);
            switchPlayer();
        }
        if (event.which == 51) {
            inputWithNumber(3);
            victoryCheck(slots);
            switchPlayer();
        }
        if (event.which == 52) {
            inputWithNumber(4);
            victoryCheck(slots);
            switchPlayer();
        }
        if (event.which == 53) {
            inputWithNumber(5);
            victoryCheck(slots);
            switchPlayer();
        }
        if (event.which == 54) {
            inputWithNumber(6);
            victoryCheck(slots);
            switchPlayer();
        }
        if (event.which == 55) {
            inputWithNumber(7);
            victoryCheck(slots);
            switchPlayer();
        }
    });

    $(".column").on("click", function (e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);

                break;
            }
        }

        var slotsInRow = $(".row" + i);

        if (checkForVictory(slotsInCol)) {
            $(".overlay").css({ visibility: "visible" });
            return;
        } else if (checkForVictory(slotsInRow)) {
            $(".overlay").css({ visibility: "visible" });
            return;
        } else if (checkForDiagonalVictory(slots)) {
            $(".overlay").css({ visibility: "visible" });
            return;
        }

        switchPlayer();
    });

    function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
            activePlayerDisplay.text("Player 2's turn");
            $(".coin").css({ "background-color": "yellow" });
            $(".winMessage").css({ color: "yellow" });
            $(".winMessage").css({ color: "yellow" });
            $(".newGame").css({ color: "yellow", border: "yellow" });
            $(".winner").text("Player 2 wins!");
        } else {
            currentPlayer = "player1";
            activePlayerDisplay.text("Player 1's turn");
            $(".coin").css({ "background-color": "red" });
            $(".winMessage").css({ color: "red" });
            $(".winMessage").css({ color: "red" });
            $(".newGame").css({ color: "red", border: "red" });
            $(".winner").text("Player 1 wins!");
        }
    }

    function checkForVictory(slots) {
        var counter = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                counter++;
                if (counter === 4) {
                    slots.eq(i).addClass("victory");
                    slots.eq(i - 1).addClass("victory");
                    slots.eq(i - 2).addClass("victory");
                    slots.eq(i - 3).addClass("victory");
                    return true;
                }
            } else {
                counter = 0;
            }
        }
    }

    function checkForDiagonalVictory(slots) {
        var array = [];

        for (var i = 0; i < slots.length; i++) {
            array.push(i);
        }

        for (var k = 0; k <= slots.length; k++) {
            if (
                slots.eq(k).hasClass(currentPlayer) &&
                slots.eq(k + 7).hasClass(currentPlayer) &&
                slots.eq(k + 14).hasClass(currentPlayer) &&
                slots.eq(k + 21).hasClass(currentPlayer) &&
                k % (columns.length - 1) <= 2
            ) {
                slots.eq(k).addClass("victory");
                slots.eq(k + 7).addClass("victory");
                slots.eq(k + 14).addClass("victory");
                slots.eq(k + 21).addClass("victory");

                return true;
            } else if (
                slots.eq(k).hasClass(currentPlayer) &&
                slots.eq(k - 5).hasClass(currentPlayer) &&
                slots.eq(k - 10).hasClass(currentPlayer) &&
                slots.eq(k - 15).hasClass(currentPlayer) &&
                k % (slots.length / columns.length) <= 2
            ) {
                slots.eq(k).addClass("victory");
                slots.eq(k - 5).addClass("victory");
                slots.eq(k - 10).addClass("victory");
                slots.eq(k - 15).addClass("victory");
                return true;
            }
        }
    }

    function inputWithNumber(num) {
        var col = $(".col" + num);

        var slotsInCol = col.children();

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);

                break;
            }
        }
    }

    function victoryCheck(slots) {
        var array = [];

        for (var i = 0; i < slots.length; i++) {
            array.push(i);
        }

        for (var k = 0; k <= slots.length; k++) {
            if (
                slots.eq(k).hasClass(currentPlayer) &&
                slots.eq(k + 7).hasClass(currentPlayer) &&
                slots.eq(k + 14).hasClass(currentPlayer) &&
                slots.eq(k + 21).hasClass(currentPlayer) &&
                k % (slots.length / columns.length) <= 2
            ) {
                slots.eq(k).addClass("victory");
                slots.eq(k + 7).addClass("victory");
                slots.eq(k + 14).addClass("victory");
                slots.eq(k + 21).addClass("victory");
                $(".overlay").css({ visibility: "visible" });
                return true;
            } else if (
                slots.eq(k).hasClass(currentPlayer) &&
                slots.eq(k - 5).hasClass(currentPlayer) &&
                slots.eq(k - 10).hasClass(currentPlayer) &&
                slots.eq(k - 15).hasClass(currentPlayer) &&
                k % (slots.length / columns.length) <= 2
            ) {
                slots.eq(k).addClass("victory");
                slots.eq(k - 5).addClass("victory");
                slots.eq(k - 10).addClass("victory");
                slots.eq(k - 15).addClass("victory");
                $(".overlay").css({ visibility: "visible" });
                return true;
            } else if (
                slots.eq(k).hasClass(currentPlayer) &&
                slots.eq(k + 6).hasClass(currentPlayer) &&
                slots.eq(k + 12).hasClass(currentPlayer) &&
                slots.eq(k + 18).hasClass(currentPlayer)
            ) {
                slots.eq(k).addClass("victory");
                slots.eq(k + 6).addClass("victory");
                slots.eq(k + 12).addClass("victory");
                slots.eq(k + 18).addClass("victory");
                $(".overlay").css({ visibility: "visible" });
                return true;
            } else if (
                slots.eq(k).hasClass(currentPlayer) &&
                slots.eq(k + 1).hasClass(currentPlayer) &&
                slots.eq(k + 2).hasClass(currentPlayer) &&
                slots.eq(k + 3).hasClass(currentPlayer) &&
                k % (slots.length / columns.length) <= 2
            ) {
                slots.eq(k).addClass("victory");
                slots.eq(k + 1).addClass("victory");
                slots.eq(k + 2).addClass("victory");
                slots.eq(k + 3).addClass("victory");
                $(".overlay").css({ visibility: "visible" });
                return true;
            }
        }
    }
})();
