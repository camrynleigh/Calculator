        document.getElementById('Add').addEventListener('click', function () {
            var numberOne = document.getElementById('number-one').value
            var numberTwo = document.getElementById('number-two').value

            var result = parseInt(numberOne) + parseInt(numberTwo);

            document.getElementById('add-result').innerHTML = result;
        });


        document.getElementById('Subtract').addEventListener('click', function () {
            var numberThree = document.getElementById('number-three').value
            var numberFour = document.getElementById('number-four').value

            var result = parseInt(numberThree) - parseInt(numberFour);

            document.getElementById('sub-result').innerHTML = result;
        });



        document.getElementById('Multiply').addEventListener('click', function () {
            var numberFive = document.getElementById('number-five').value
            var numberSix = document.getElementById('number-six').value

            var result = parseInt(numberFive) * parseInt(numberSix);

            document.getElementById('mul-result').innerHTML = result;
        });