<template>
  <div id="addProduct">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="form.title"
        label="Product title *"
        hint="Name and surname"
        lazy-rules
       
      />

      <q-input
        filled
        type="number"
        v-model="form.price"
        label="Product price *"
        lazy-rules
       
      />

       <q-file
        v-model="file" 
        label="Choose Product Image" 
        @update:modelValue="fileUpload" 
        />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup> 
import { ref, reactive } from "vue";
import { 
 getStorage,
 ref as firebaseref, 
 uploadBytesResumable, 
 getDownloadURL 
 }
  from "../../firebase.js";
  import { db, collection, addDoc } from "../../firebase.js";
const file = ref(null);

const form = reactive({
    title: "",
    price:0,
    imageUrl:"",
})

// addDc(collection(db, ))
const onSubmit = async() => {
    const docRef = await addDoc(collection(db, "vuestore"),form);
    console.log("Document written with ID: " + docRef.id);
}
const fileUpload = () => {
    // access file data

const storage = getStorage();
const storageRef = firebaseref(storage, 'products/' + file.value.name);

const uploadTask = uploadBytesResumable(storageRef, file.value);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
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
      form.imageUrl =  downloadURL;
    });
  }
);
}
  
</script>

<style scoped>
#addProduct {
    width: 50%;
}
</style>
