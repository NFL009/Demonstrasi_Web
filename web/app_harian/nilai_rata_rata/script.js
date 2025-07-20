    let mapelCount = 8;
    let semesterCount = 6;
    let mapelLabel = "Mapel";
    let semesterLabel = "Semester";
    let data = Array.from({ length: mapelCount }, () => Array(semesterCount).fill(0));

    function renderTable() {
      let html = `
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>${mapelLabel}</th>
              <th colspan="${semesterCount}">${semesterLabel}</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              ${Array.from({ length: semesterCount }, (_, j) => `<td>${j + 1}</td>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${data.map((row, i) => `
              <tr>
                <td>${i + 1}</td>
                <td><input type="text" value="Text" /></td>
                ${row.map((val, j) => `<td><input type="number" value="${val}" onchange="updateValue(${i}, ${j}, this.value)" /></td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      document.getElementById('table-container').innerHTML = html;
      updateResults();
    }

    function updateValue(i, j, value) {
      data[i][j] = parseFloat(value) || 0;
      updateResults();
    }

    function updateResults() {
      const rrSemesters = Array(semesterCount).fill(0);
      const rrMapel = data.map(row => average(row));
      let total = 0, count = 0;

      for (let j = 0; j < semesterCount; j++) {
        for (let i = 0; i < mapelCount; i++) {
          rrSemesters[j] += data[i][j];
        }
        rrSemesters[j] /= mapelCount;
        total += rrSemesters[j];
        count++;
      }

      let rrKeseluruhan = total / count;

      let resultHtml = `
        <div class="result-box">RR Keseluruhan : ${rrKeseluruhan.toFixed(2)}</div>
        ${rrSemesters.map((rr, i) => `<div class="result-box">RR ${semesterLabel} ${i + 1} : ${rr.toFixed(2)}</div>`).join('')}
        ${rrMapel.map((rr, i) => `<div class="result-box">RR ${mapelLabel} ${i + 1} : ${rr.toFixed(2)}</div>`).join('')}
      `;

      document.getElementById('result-container').innerHTML = resultHtml;
    }

    function average(arr) {
      return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

    function openEditModal() {
      document.getElementById('edit-modal').style.display = 'flex';
      document.getElementById('mapel-label').value = mapelLabel;
      document.getElementById('semester-label').value = semesterLabel;
      document.getElementById('jumlah-mapel').value = mapelCount;
      document.getElementById('jumlah-semester').value = semesterCount;
    }

    function closeEditModal() {
      document.getElementById('edit-modal').style.display = 'none';
    }

    function applyEdit() {
      mapelLabel = document.getElementById('mapel-label').value || "Mapel";
      semesterLabel = document.getElementById('semester-label').value || "Semester";
      const newMapelCount = parseInt(document.getElementById('jumlah-mapel').value) || 1;
      const newSemesterCount = parseInt(document.getElementById('jumlah-semester').value) || 1;

      const newData = Array.from({ length: newMapelCount }, (_, i) =>
        Array.from({ length: newSemesterCount }, (_, j) =>
          data[i]?.[j] || 0
        )
      );

      mapelCount = newMapelCount;
      semesterCount = newSemesterCount;
      data = newData;

      closeEditModal();
      renderTable();
    }

    renderTable();