let addBtn = document.querySelector('.button-add')
let transactionType = document.querySelector('.transaction-type')
let description = document.querySelector('.description')
let amount = document.querySelector('.ruppees')


// section divs

let incomeList = document.querySelector('.income-list')
let expenseList = document.querySelector('.expense-list')

let incomeArray = []
let expenseArray = []
let newEntry = {}

let editMode = false
let editID = ''

function submitHandler(e) {
    e.preventDefault()
    newEntry = {
        type: transactionType.value,
        desc: description.value,
        amount: amount.value,
        id: Math.random()
    }


    if (!editMode && transactionType.value === 'income') {



        incomeArray.push(newEntry)


        incomeList.innerHTML = ''

        incomeArray.map(list => {
            let div = document.createElement('div')
            div.classList.add('list')
            div.setAttribute('id', list.id)
            let h4 = document.createElement('h4')
            h4.innerHTML = list.type
            h4.classList.add('inc-type')
            let des = document.createElement('p')
            des.classList.add('description')
            des.innerHTML = list.desc
            let amt = document.createElement('p')
            amt.classList.add('description')
            amt.innerHTML = list.amount
            div.appendChild(h4)
            div.appendChild(des)
            div.appendChild(amt)

            let actionBtns = document.createElement('div')
            actionBtns.classList.add('actionBtns')

            let editbtn = document.createElement('button')
            editbtn.classList.add('edit')
            editbtn.innerHTML = 'Edit'
            actionBtns.appendChild(editbtn)

            let deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete')
            deleteBtn.innerHTML = 'Delete'
            actionBtns.appendChild(deleteBtn)

            div.appendChild(actionBtns)

            // console.log(div);
            incomeList.appendChild(div)

            const deleteHandler = (e) => {

                const div = e.target.closest('.list');
                let id = div.getAttribute('id')
                console.log(id);
                incomeArray = incomeArray.filter(entry => parseFloat(entry.id) !== parseFloat(id));
                incomeList.removeChild(div);
                console.log(incomeArray);

            }
            deleteBtn.addEventListener('click', deleteHandler)

            const editHandler = (e) => {

                const div = e.target.closest('.list');
                let id = div.getAttribute('id')
                editID = id


                transactionType.value = list.type;
                description.value = list.desc;
                amount.value = list.amount
                editMode = true

            }
            editbtn.addEventListener('click', editHandler)


        })
        description.value = ''
        amount.value = ''

    }

    else if (!editMode && transactionType.value === 'expense') {

        expenseArray.push(newEntry)
        expenseList.innerHTML = ''

        expenseArray.map(list => {
            let div = document.createElement('div')
            div.classList.add('list')
            div.setAttribute('id', list.id)
            let h4 = document.createElement('h4')
            h4.innerHTML = list.type
            h4.classList.add('inc-type')
            let des = document.createElement('p')
            des.classList.add('description')
            des.innerHTML = list.desc
            let amt = document.createElement('p')
            amt.classList.add('description')
            amt.innerHTML = list.amount
            div.appendChild(h4)
            div.appendChild(des)
            div.appendChild(amt)

            let actionBtns = document.createElement('div')
            actionBtns.classList.add('actionBtns')

            let editbtn = document.createElement('button')
            editbtn.classList.add('edit')
            editbtn.innerHTML = 'Edit'
            actionBtns.appendChild(editbtn)

            let deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete')
            deleteBtn.innerHTML = 'Delete'
            actionBtns.appendChild(deleteBtn)

            div.appendChild(actionBtns)

            console.log(div);
            expenseList.appendChild(div)


            const deleteHandler = (e) => {

                const div = e.target.closest('.list');
                let id = div.getAttribute('id')
                console.log(id);
                expenseArray = expenseArray.filter(entry => entry.id !== parseFloat(id));
                expenseList.removeChild(div);
                console.log(expenseArray);

            }
            deleteBtn.addEventListener('click', deleteHandler)

            const editHandler = (e) => {

                const div = e.target.closest('.list');
                let id = div.getAttribute('id')
                editID = id


                transactionType.value = list.type;
                description.value = list.desc;
                amount.value = list.amount
                editMode = true

            }
            editbtn.addEventListener('click', editHandler)

        })
    }

    else if ( editMode && transactionType.value === 'income' ) {

        let index = incomeArray.findIndex(li=> parseFloat(li.id)  === parseFloat(editID))
        console.log(index);
        incomeArray[index] = {
            type: transactionType.value,
            desc: description.value,
            amount: amount.value,
            id: Math.random()
        }
        editMode = false

        
        incomeList.innerHTML = ''

        incomeArray.map(list => {
            let div = document.createElement('div')
            div.classList.add('list')
            div.setAttribute('id', list.id)
            let h4 = document.createElement('h4')
            h4.innerHTML = list.type
            h4.classList.add('inc-type')
            let des = document.createElement('p')
            des.classList.add('description')
            des.innerHTML = list.desc
            let amt = document.createElement('p')
            amt.classList.add('description')
            amt.innerHTML = list.amount
            div.appendChild(h4)
            div.appendChild(des)
            div.appendChild(amt)

            let actionBtns = document.createElement('div')
            actionBtns.classList.add('actionBtns')

            let editbtn = document.createElement('button')
            editbtn.classList.add('edit')
            editbtn.innerHTML = 'Edit'
            actionBtns.appendChild(editbtn)

            let deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete')
            deleteBtn.innerHTML = 'Delete'
            actionBtns.appendChild(deleteBtn)

            div.appendChild(actionBtns)

            // console.log(div);
            incomeList.appendChild(div)

            const deleteHandler = (e) => {

                const div = e.target.closest('.list');
                let id = div.getAttribute('id')
                console.log(id);
                incomeArray = incomeArray.filter(entry => parseFloat(entry.id) !== parseFloat(id));
                incomeList.removeChild(div);
                console.log(incomeArray);

            }
            deleteBtn.addEventListener('click', deleteHandler)

            const editHandler = (e) => {

                const div = e.target.closest('.list');
                let id = div.getAttribute('id')
                editID = id


                transactionType.value = list.type;
                description.value = list.desc;
                amount.value = list.amount
                editMode = true

            }
            editbtn.addEventListener('click', editHandler)


        })
        description.value = ''
        amount.value = ''

    }

    else if( editMode && transactionType.value === 'expense'){

        let index = expenseArray.findIndex(li=> parseFloat(li.id)  === parseFloat(editID))
        console.log(index);
        expenseArray[index] = {
            type: transactionType.value,
            desc: description.value,
            amount: amount.value,
            id: Math.random()
        }
        editMode = false

        
        expenseList.innerHTML = ''

        expenseArray.map(list => {
            let div = document.createElement('div')
            div.classList.add('list')
            div.setAttribute('id', list.id)
            let h4 = document.createElement('h4')
            h4.innerHTML = list.type
            h4.classList.add('inc-type')
            let des = document.createElement('p')
            des.classList.add('description')
            des.innerHTML = list.desc
            let amt = document.createElement('p')
            amt.classList.add('description')
            amt.innerHTML = list.amount
            div.appendChild(h4)
            div.appendChild(des)
            div.appendChild(amt)

            let actionBtns = document.createElement('div')
            actionBtns.classList.add('actionBtns')

            let editbtn = document.createElement('button')
            editbtn.classList.add('edit')
            editbtn.innerHTML = 'Edit'
            actionBtns.appendChild(editbtn)

            let deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete')
            deleteBtn.innerHTML = 'Delete'
            actionBtns.appendChild(deleteBtn)

            div.appendChild(actionBtns)

            // console.log(div);
            expenseList.appendChild(div)

            const deleteHandler = (e) => {

                const div = e.target.closest('.list');
                let id = div.getAttribute('id')
                console.log(id);
                expenseArray = expenseArray.filter(entry => parseFloat(entry.id) !== parseFloat(id));
                expenseList.removeChild(div);
                
            }
            deleteBtn.addEventListener('click', deleteHandler)

            const editHandler = (e) => {

                const div = e.target.closest('.list');
                let id = div.getAttribute('id')
                editID = id


                transactionType.value = list.type;
                description.value = list.desc;
                amount.value = list.amount
                editMode = true

            }
            editbtn.addEventListener('click', editHandler)


        })
        description.value = ''
        amount.value = ''   
    }
}













addBtn.addEventListener('click', submitHandler)
