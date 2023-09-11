import * as userData from './user.json'

import { ref } from 'vue'

const user = ref(userData);

export function useUser() {
  return { user }
}
