* {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f5f5;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background-color: #131313;
    max-width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 35px;
    border-radius: 10px;
    user-select: none;
}

#Display-area {
    width: 100%;
    margin: 3vh 0;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, minmax(40px, auto));
    word-wrap: break-word;
    padding-bottom: 20px;
    border-bottom: 1px rgba(128, 128, 128, 0.116) solid;
}

#Display-area .currentInput {
    /* display: flex; */
    text-align: right;
    height: 8vh;
    color: white;
    font-size: xx-large;
    line-height: 2;
    word-wrap: break-word;
}

#Display-area .answerScreen {
    text-align: right;
    color: rgba(150, 150, 150, 0.87);
    height: 7px;
    line-height: 3;
    font-size: larger;
}

.keypad-btns {
    display: grid;
    grid: repeat(5, 70px) / repeat(4, 70px);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
}

.keypad-btns button {
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #131313;
    color: white;
    font-size: x-large;
}

.keypad-btns .fun_btn {
    color: #ff8800;
}

.num_btn:hover,.fun_btn:hover {
    background-color: rgba(29, 29, 29, 0.979);
}