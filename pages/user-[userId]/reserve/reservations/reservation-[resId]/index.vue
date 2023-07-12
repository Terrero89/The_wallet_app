import { UIDialog, UITable } from '../../../../../.nuxt/components';
<script></script>

<template>
  <BookingWrapper>
    {{ $route.params }}
    resevation ID PAGE - ID:{{ $route.params.resId }}


    <UIDialog/>
  </BookingWrapper>
</template>
