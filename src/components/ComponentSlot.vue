<template>
  <header>
    <h2><slot name="header">Заголовок по умолчанию</slot></h2>
  </header>
  <body>
    <p>
      <slot name="body">Тело по умолчанию</slot>
    </p>
    <div v-if="$slots.maininfor">
      <slot name="maininfor"> <h3>видимо не видимо</h3></slot>
    </div>
  </body>
  <footer>
    <p><slot>Футер по умолчанию</slot></p>
    <h3><slot>Футер по умолчанию</slot></h3>
  </footer>
</template>
