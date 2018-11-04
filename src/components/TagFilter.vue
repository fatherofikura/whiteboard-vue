<template>
 <div class="tag-filter">
    <section>
      <b-field grouped group-multiline>
        <div class="control">
          <b-switch :value="true" type="is-dark">未出社</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-success">在席</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-light">帰宅</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-primary">出張</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-warning">外出</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-link">社内</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-danger">休み</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-info">その他</b-switch>
        </div>
      </b-field>
    </section>
  </div>
</template>
