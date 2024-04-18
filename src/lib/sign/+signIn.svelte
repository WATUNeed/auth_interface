<script lang="ts">
    import { signInRequest } from "$lib/sign/api/authenticationRequest.js";
    import type { SingInDTO } from '$lib/sign/entities/authentication.js';

    let errorMessage: string = '';
    let phone: string = '';
    let password: string = '';

    async function handleSignIn() {
        let regexp = new RegExp('^\\d+$')
        if (!regexp.test(phone)) {
            errorMessage = 'The phone number must consist of numbers only.';
            return
        }
        let payload: SingInDTO = {
            phone: phone,
            password: password
        };
        errorMessage = await signInRequest(payload);
    }
</script>

<div class="container">
    <form 
        class="form"
        on:submit={handleSignIn}
    >
        <p class="phone">
            <input 
                id="phone-sign-in"
                type="tel" 
                placeholder="phone" 
                bind:value={phone}
                required
                autocomplete="off"
            />
        </p>
        <p class="password">
            <input 
                id="password-sign-in"
                type="password" 
                placeholder="password" 
                bind:value={password}
                required
                autocomplete="off"
            />
        </p>
        <p class="button">
            <button 
                id="submit-sign-in" 
                type="submit"
            >sign in</button>
        </p>
        <p class="restore-password">
            <a href="#">forgot password</a>
        </p>
        <p class="error-message">
            {errorMessage}
        </p>
    </form>
</div>

