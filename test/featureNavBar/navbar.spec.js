/* test methods */
import sinon from 'sinon'
import { describe, it, before, after } from 'mocha'
import assert from 'assert'

/* what to test */
import {navbar} from '../../src/navbar'

describe('### MY NEW FEATURE TEST #######', () => {
	it('should return true', () => {
		assert(navbar());
	})

})

