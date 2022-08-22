<template>
  <div class="mb-4">
    <label for="imageUrl">Image</label>
    <div v-if="blog.imageUrl">
      <!-- A preview of the image. -->
      <img :src="blog.imageUrl" class="w-24 md:w-32 h-auto object-cover inline-block" alt="">
      <!-- Delete button for deleting the image. -->
      <button v-if="blog.imageUrl" @click="deleteImage" :disabled="isDeletingImage" type="button"
        class="bg-red-500 border-red-300 text-white">
        {{ isDeletingImage ? 'Deleting...' : 'Delete' }}
      </button>
    </div>
    <!-- Clicking this button triggers the "click" event of the file input. -->
    <button v-if="!blog.imageUrl" @click="launchImageFile" :disabled="isUploadingImage" type="button">
      {{ isUploadingImage ? 'Uploading...' : 'Upload' }}
    </button>
    <!-- This is the real file input element. -->
    <input ref="imageFile" @change.prevent="uploadImageFile($event.target.files)" type="file"
      accept="image/png, image/jpeg" class="hidden">
      <input type="text" v-model="tags">
      <button @click="tab">ok</button>
  </div>
</template>


<script>
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default {
  data() {
    return {
      blog: {},
      isUploadingImage: false,
      isDeletingImage: false,
      tags:""
    }
  },
  methods: {
    launchImageFile() {
      // Trigger the file input click event.
      this.$refs.imageFile.click()
    },
    uploadImageFile(files) {
      if (!files.length) {
        return
      }
      const file = files[0]

      if (!file.type.match('image.*')) {
        alert('Please upload an image.')
        return
      }

      const metadata = {
        contentType: file.type
      }

      this.isUploadingImage = true

      // Create a reference to the destination where we're uploading
      // the file.
      // const storage = this.$firebase.storage();
      const storage = getStorage();
      console.log("storage", storage);

      const imageRef = ref(storage, `images/${files.name}`)
      const uploadTask = uploadBytesResumable(imageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            
            console.log('File available at', downloadURL);
          
          });
        }
      );

      // const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
      //   // Once the image is uploaded, obtain the download URL, which
      //   // is the publicly accessible URL of the image.
      //   return snapshot.ref.getDownloadURL().then((url) => {
      //     return url
      //   })
      // }).catch((error) => {
      //   console.error('Error uploading image', error)
      // })

      // When the upload ends, set the value of the blog image URL
      // and signal that uploading is done.
      uploadTask.then((url) => {
        this.blog.imageUrl = url
        this.isUploadingImage = false
      })
    },
    deleteImage() {
      firebase.storage().refFromURL(this.blog.imageUrl).delete()
        .then(() => {
          this.blog.imageUrl = ''
        })
        .catch((error) => {
          console.error('Error deleting image', error)
        })
    },
    tab(){
    
    var tab = this.tags.split(',')
    console.log(tab)
    for (var a in tab)
    {
        var variable = tab[a]
        console.log(variable)
    }
}
  }
}
</script>