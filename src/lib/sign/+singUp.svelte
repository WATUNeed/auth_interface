<script lang="ts">
    import { signUpRequest } from '$lib/sign/api/authenticationRequest.js'
    import type { SingUpDTO } from '$lib/sign/entities/authentication.js';

    let errorMessage: string = '';
    let phone: string = '';
    let password: string = '';

    async function handleSignUp() {
        let regexp = new RegExp('^\\d+$')
        if (!regexp.test(phone)) {
            errorMessage = 'The phone number must consist of numbers only.';
            return
        }
        if (password.length < 6) {
            errorMessage = 'The password must be greater than 6 characters.';
            return
        }
        let payload: SingUpDTO = {
            phone: phone,
            password: password
        };
        errorMessage = await signUpRequest(payload)
    }
</script>

<div class="container">
    <form 
        class="form"
        on:submit={handleSignUp}
    >
        <p class="phone">
            <input 
                id="phone-sign-up"
                type="tel" 
                placeholder="phone" 
                required
                autocomplete="off"
                bind:value={phone}
            />
        </p>
        <p class="password">
            <input 
                id="password-sign-up"
                type="password" 
                placeholder="password" 
                required
                autocomplete="off"
                bind:value={password}
            />
        </p>
        <p class="button">
            <button 
                id="submit-sign-up" 
                type="submit"
            >sign up</button>
        </p>
        <p class="error-message">
            {errorMessage}
        </p>
    </form>
</div>

