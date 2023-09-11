import { describe, expect, it } from 'vitest'

import HeaderComponent from '../HeaderComponent.vue'
import { mount } from '@vue/test-utils'

describe('HeaderComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(HeaderComponent)
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
