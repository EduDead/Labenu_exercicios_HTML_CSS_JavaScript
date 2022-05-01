const addTask = () => {
    const taskInput = document.getElementById("tarefa")
    if (taskInput.value !== "") {
        const selectedDay = document.getElementById("dias-semana")
        const selectedDayValue = document.getElementById(selectedDay.value)
        
        selectedDayValue.innerHTML += `<p>${taskInput.value}</p>`
        taskInput.value = ""
    } else {
        alert("O campo 'Tarefa' está em branco!")
    }
}

const clearAll = () => {
    const weekDays = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]

    for (i=0; i<weekDays.length; i++){
        const day = document.getElementById(weekDays[i])
        day.innerHTML = ""
    }
}

// const scratch = () => {
//   vi a resposta no plantao enquanto tava fazendo essa parte hahah (parte 2 do desafio)    
// }

