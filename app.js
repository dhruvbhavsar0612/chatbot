const branch=['CSE', 'AUTOMOBILE ENGINEERING', 'CIVIL ENGINEERING',
'ELECTRICAL ENGINEERING',
'ELECTRONICS & COMMUNICATION ENGINEERING', 'FOOD  TECHNOLOGY',
'IT', 'MECHANICAL ENGINEERING',
'INFORMATION & COMMUNICATION TECHNOLOGY',
'AERONAUTICAL ENGINEERING', 'CHEMICAL ENGINEERING',
'AUTOMATION AND ROBOTICS', 'ENVIRONMENTAL ENGINEERING',
'NANO TECHNOLOGY', 'PHARMACEUTICAL ENGINEERING',
'ROBOTICS AND AUTOMATION', 'PRODUCTION ENGINEERING',
'MANUFACTURING ENGINEERING', 'PLASTIC ENGINEERING', 'MECHATRONICS',
'BIOTECHNOLOGY', 'MATHEMATICS AND COMPUTING',
'METALLURGICAL ENGINEERING', 'TEXTILE ENGINEERING',
'WATER MANAGEMENT ***', 'INSTRUMENTATION & CONTROL ENGINEERING',
'MARINE ENGINEERING', 'PETROCHEMICAL ENGINEERING',
'MINING ENGINEERING', 'ELECTRONICS & INSTRUMENTATION ENGINEERING',
'ELECTRONICS & COMMUNICATION (Communication', 'RUBBER TECHNOLOGY',
'INDUSTRIAL ENGINEERING', 'POWER ELECTRONICS',
'ROBOTICS & ARTIFICIAL INTELLIGENCE', 'PETROLEUM ENGINEERING',
'AIRCRAFT MAINTENANCE ENGINEERING', 'AGRICULTURAL ENGINEERING',
'DAIRY TECHNOLOGY', 'FIRE & SAFETY ENGINEERING',
'CHEMICAL ENGINEERING ', 'CHEMICAL TECHNOLOGY',
'MOBILE APPLICATION & CLOUD TECHOLOGY'];

// code for adding branch to select tag
const branchSelect = document.getElementById('branch');
branch.forEach((branch) => {
        const option = document.createElement('option');
        option.text = branch;
        option.value = branch;
        branchSelect.add(option);
    }
);

const category=['DS','EVS','EWS','OPEN','SC','SEBC','TFW'];
const categorySelect = document.getElementById('category');
category.forEach((category) => {
    const option = document.createElement('option');
    option.text = category;
    option.value = category;
    categorySelect.add(option);
});

const marks=document.getElementById('marks');
const rank=document.getElementById('rank');

const fillForm = document.getElementById('fill-up-form');
fillForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const branchValue = branchSelect.value;
    const categoryValue = categorySelect.value;
    const marksValue = marks.value;
    const rankValue = rank.value;
    if (branchValue === '' || categoryValue === '' || marksValue === '' || rankValue === '') {
        alert('Please fill all the fields');
    } else {
        const data = {
            marks: marksValue,
            rank: rankValue,
            branch: branchValue,
            category: categoryValue,
            code : 'printAQZ'
        };
        console.log(data);
        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then((res) => {
            return res.json();
        }
        ).then((data) => {
            console.log(data);
            if (data.error) {
                alert(data.error);
            } else {
                alert(data.result);
            }
        }
        ).catch((err) => {
            console.log(err);
        }
        );
    }
    // hide the form
    fillForm.style.display = 'none';
});