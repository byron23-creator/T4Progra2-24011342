/**********    Laboratorio 04  ********************
 * 
 * 
 * Complementa el objeto images de la tarea anterior con dos nuevos 
 * métodos (sin reescribir todo el objeto):

    1.    edit- que toma tres argumentos ( title, artist, y date) y 
          si encuentra una imagen con el título dado en la lista, 
          cambia sus propiedades artisty date;
    2.    delete- que toma el argumento title y si encuentra una imagen 
          con este título en la lista, la elimina 
          (para eliminar un elemento de la lista, use el método splice)
*   

    Además, agregue un método show al Imageconstructor que mostrará 
    información sobre esta imagen. No reescriba el constructor.
    Utilice prototipos para este propósito. 
    Luego, modifyel showmétodo del objeto de imágenes de modo 
    que utilice el showmétodo de imagen única recién creado para 
    mostrar la información.

    Pruebe el script llamando a la secuencia:
 */



// Constructor de Image
function Image(title, artist, date) {
      this.title = title;
      this.artist = artist;
      this.date = date;
  }
  
  // Agregar el método show al prototipo 
  Image.prototype.show = function() {
      console.log(`Título: ${this.title}, Artista: ${this.artist}, Año: ${this.date}`);
  };
  
  // Objeto images
  let images = {
      list: [], 
      
      // Método que verifica si la imagen ya está en la lista
      contains: function(title) {
          return this.list.some(image => image.title === title);
      },
      
      // Método que agrega una nueva imagen a la lista si no está ya agregada
      add: function(title, artist, date) {
          if (!this.contains(title)) {
              let newImage = new Image(title, artist, date);
              this.list.push(newImage);
              console.log(`Imagen "${title}" agregada a la lista.`);
          } else {
              console.log(`La imagen "${title}" ya está en la lista.`);
          }
      },
      
      // Método que muestra todas las imágenes en la lista
      show: function() {
          if (this.list.length === 0) {
              console.log("La lista de imágenes está vacía.");
          } else {
              this.list.forEach(image => {
                  image.show(); 
              });
          }
      },
      
      // Método que elimina todas las imágenes 
      clear: function() {
          this.list = [];
          console.log("La lista de imágenes ha sido vaciada.");
      },
  
      // Método para editar una imagen existente
      edit: function(title, newArtist, newDate) {
          let image = this.list.find(image => image.title === title);
          if (image) {
              image.artist = newArtist;
              image.date = newDate;
              console.log(`La imagen "${title}" ha sido actualizada.`);
          } else {
              console.log(`La imagen "${title}" no se encuentra en la lista.`);
          }
      },
  
      // Método para eliminar una imagen por título
      delete: function(title) {
          let index = this.list.findIndex(image => image.title === title);
          if (index !== -1) {
              this.list.splice(index, 1);
              console.log(`La imagen "${title}" ha sido eliminada de la lista.`);
          } else {
              console.log(`La imagen "${title}" no se encuentra en la lista.`);
          }
      }
  };
  
  // Prueba del script
  images.add("Mona Lisa", "Leonardo da Vinci", 1503);
  images.add("La última cena", "Leonardo da Vinci", 1495);
  images.add("La noche estrellada", "Vincent van Gogh", 1889);
  
  // Mostrar todas las imágenes
  console.log("Mostrar imágenes después de agregar:");
  images.show();
  
  // Editar una imagen existente
  images.edit("La noche estrellada", "Vincent van Gogh", 1890);
  
  // Mostrar todas las imágenes después de editar
  console.log("\nMostrar imágenes después de la edición:");
  images.show();
  
  // Eliminar una imagen
  images.delete("La última cena");
  
  // Mostrar todas las imágenes después de eliminar
  console.log("\nMostrar imágenes después de eliminar:");
  images.show();
  
  // Limpiar la lista
  images.clear();
  
  // Mostrar después de vaciar la lista
  console.log("\nMostrar imágenes después de limpiar la lista:");
  images.show();
  