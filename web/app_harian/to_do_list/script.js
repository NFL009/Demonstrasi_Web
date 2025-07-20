    function addTodo() {
      const input = document.getElementById("todoInput");
      const text = input.value.trim();
      if (text === "") return;

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = text;
      span.onclick = function () {
        li.classList.toggle("completed");
      };

      const delBtn = document.createElement("button");
      delBtn.className = "delete-btn";
      delBtn.textContent = "×";
      delBtn.onclick = function () {
        const confirmDelete = confirm("Apakah yakin untuk menghapus?");
        if (confirmDelete) {
          li.remove();
        }
      };

      li.appendChild(span);
      li.appendChild(delBtn);
      document.getElementById("todoList").appendChild(li);
      input.value = "";
    }