<template>
  <button class="button"><slot /></button>
</template>

<style lang="scss">
.button {
  background: #f61e78;
  border-radius: 5px;
  padding: 8px 20px;
  border: 0;
  color: white;
  font-weight: 600;
  font-size: 80%;
  cursor: pointer;
  text-transform: uppercase;
  margin: 2px;

  &:hover {
    transition: 0.1s;
    padding: 10px 22px;
    margin: 1px;
    font-size: 82%;
  }
}
</style>
