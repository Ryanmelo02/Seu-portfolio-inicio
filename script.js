// Função para exibir e redimensionar a imagem selecionada
function showImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {
    const img = new Image();

    img.onload = function () {
      const canvas = document.createElement('canvas');
      const size = 400;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

      const minSide = Math.min(img.width, img.height);
      const sx = (img.width - minSide) / 2;
      const sy = (img.height - minSide) / 2;

      ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);
      const compressedImage = canvas.toDataURL('image/jpeg', 0.7);

      document.getElementById('profile-img').src = compressedImage;
    };

    img.src = reader.result;
  };

  reader.readAsDataURL(file);
}

// Função para salvar as informações do formulário
function saveInformation() {
  const nome = document.getElementById('input-nome').value.trim();
  const email = document.getElementById('input-email').value.trim();
  const telefone = document.getElementById('input-telefone').value.trim();
  const experiencia = document.getElementById('input-experiencia').value.trim();

  if (!nome || !email || !telefone || !experiencia) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  document.getElementById('nome').textContent = nome;
  document.getElementById('email').textContent = email;
  document.getElementById('telefone').textContent = telefone;
  document.getElementById('experiencia').textContent = experiencia;

  document.getElementById('form-container').style.display = "none";
  document.getElementById('info-container').style.display = "block";
}

// Função para voltar a editar as informações
function editarInformacoes() {
  document.getElementById('form-container').style.display = "block";
  document.getElementById('info-container').style.display = "none";
}
