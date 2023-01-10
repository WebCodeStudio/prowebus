<template>
  <aside class="media-gallery">
    <figure>
      <img src="@/assets/img/logo-admin-2022-2.png" alt="" />
      <figcaption>Test</figcaption>
      <div id="overlay">
        <ul class="link-wrap">
          <li>
            <a href="#" class="edit"><i class="fa-light fa-pencil-alt"></i></a>
          </li>
          <li>
            <a href="#" class="remove"><i class="fa-light fa-trash-alt"></i></a>
          </li>
        </ul>
      </div>
    </figure>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables";

.media-gallery {
  display: flex;
  width: 99%;
  height: 60.8vh;
  flex-direction: row;
  flex-wrap: wrap;
 
  & figure {
    width: 18rem;
    min-width: 10.7%;
    height: 9vh;
    border: 1px solid $head-color-1;
    border-radius: 0.5rem;
    margin: 0.5rem;
    padding: 0.8rem;
    position: relative;

    & img {
      width: 25rem;
      background: $background;
    }

    & figcaption {
      text-align: center;
    }

    #overlay {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.75);
      color: $text-color-2;
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid $head-color-1;
      border-radius: 0.5rem;
      opacity: 0;

      & .link-wrap {
        display: flex;

        & .edit,
        & .remove {
          display: inline-block;
          margin: 2rem;
          color: $text-color-2;

          font: {
            size: 2rem;
          }
        }

        & .edit {
          &:hover {
            color: $head-color-2;
          }
        }
        & .remove {
          &:hover {
            color: $head-color-3;
          }
        }
      }
    }

    &:hover > #overlay {
      opacity: 1;
      transition: 0.3s all;
    }
  }
}
</style>
