    const questions = [
      { q: "1. Saat belajar, kamu lebih suka...", v: "Melihat gambar atau diagram", a: "Mendengarkan penjelasan", k: "Langsung praktik" },
      { q: "2. Ketika mengingat sesuatu, kamu biasanya...", v: "Mengingat bentuk atau warna", a: "Mengingat suara atau nada", k: "Mengingat gerakan atau kegiatan" },
      { q: "3. Dalam kelas, kamu lebih fokus saat...", v: "Lihat slide/gambar", a: "Dengar penjelasan guru", k: "Ikut praktik/tugas" },
      { q: "4. Cara paling efektif kamu mencatat adalah...", v: "Membuat mind map atau gambar", a: "Merekam suara guru", k: "Menulis sambil praktik" },
      { q: "5. Saat menjelaskan ke orang lain, kamu cenderung...", v: "Menggambar atau menunjuk sesuatu", a: "Berbicara panjang lebar", k: "Memperagakan dengan gerakan" },
      { q: "6. Kamu lebih mudah memahami pelajaran lewat...", v: "Video atau ilustrasi", a: "Podcast atau diskusi", k: "Simulasi atau praktik" },
      { q: "7. Hobi yang paling kamu nikmati...", v: "Melukis, desain, melihat galeri", a: "Mendengarkan musik, ngobrol", k: "Olahraga, eksperimen, jalan-jalan" },
      { q: "8. Saat baca buku, kamu...", v: "Tertarik dengan warna dan layout", a: "Membaca keras-keras", k: "Membaca sambil bergerak" },
      { q: "9. Kamu paling terganggu saat...", v: "Tampilan berantakan", a: "Suara bising", k: "Harus duduk terlalu lama" },
      { q: "10. Saat belajar kelompok, kamu lebih suka...", v: "Menunjukkan diagram ke teman", a: "Diskusi dan mendengar ide", k: "Melakukan praktik bersama" }
    ];

    const questionContainer = document.getElementById('questionsContainer');

    questions.forEach((q, i) => {
      questionContainer.innerHTML += `
        <div class="question">
          <p>${q.q}</p>
          <label><input type="radio" name="q${i}" value="visual"> ${q.v}</label>
          <label><input type="radio" name="q${i}" value="auditori"> ${q.a}</label>
          <label><input type="radio" name="q${i}" value="kinestetik"> ${q.k}</label>
        </div>
      `;
    });

    function showQuiz() {
      document.getElementById('startPage').classList.add('hidden');
      document.getElementById('quizForm').classList.remove('hidden');
    }

    document.getElementById('quizForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const scores = { visual: 0, auditori: 0, kinestetik: 0 };

      questions.forEach((_, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) scores[selected.value]++;
      });

      const result = Object.entries(scores).reduce((a, b) => a[1] >= b[1] ? a : b)[0];
      const resultText = document.getElementById('resultText');

      let description = "";
      if (result === 'visual') {
        description = `🎨 Kamu adalah tipe pembelajar VISUAL. Kamu mudah memahami informasi dalam bentuk gambar, warna, diagram, dan layout yang jelas. Gunakan mindmap, warna, atau ilustrasi saat belajar.`;
      } else if (result === 'auditori') {
        description = `🎧 Kamu adalah tipe pembelajar AUDITORI. Kamu lebih cepat menangkap informasi melalui suara, diskusi, musik, dan penjelasan lisan. Cobalah belajar sambil mendengarkan atau berdiskusi.`;
      } else if (result === 'kinestetik') {
        description = `🏃 Kamu adalah tipe pembelajar KINESTETIK. Kamu menyerap informasi lewat gerakan, praktik langsung, atau pengalaman nyata. Belajar sambil bergerak atau membuat proyek akan sangat membantumu.`;
      } else {
        description = "Kamu belum menyelesaikan quiz.";
      }

      resultText.textContent = description;
      document.getElementById('quizForm').classList.add('hidden');
      document.getElementById('resultPage').classList.remove('hidden');
    });