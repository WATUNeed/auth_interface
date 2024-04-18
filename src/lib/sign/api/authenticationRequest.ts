import type { SingUpDTO, SingInDTO } from '$lib/sign/entities/authentication.js';

export async function signUpRequest(payload: SingUpDTO): Promise<string> {
    const url = new URL("http://localhost:8080/api/v1/sign-up/")
    try {
        const res = await fetch(
            url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    phone: payload.phone,
                    password: payload.password,
                    role: 'CLIENT'
                })
            });
        
        if (res.status == 422) {
            return 'Validation error.'
        }
        if (!res.ok) {
            let response = JSON.parse(await res.text())
            if (Object.hasOwn(response, 'detail')) {
                return response.detail
            }
        }
    } catch (error) {
        console.error('Error signing up:', error);
    }
    return ''
}

export async function signInRequest(payload: SingInDTO): Promise<string> {
    const url = new URL("http://localhost:8080/api/v1/sign-in/")
    try {
        const res = await fetch(
            url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    phone: payload.phone,
                    password: payload.password,
                })
            });
        
        if (res.status == 422) {
            return 'Validation error.'
        }
        if (!res.ok) {
            let response = JSON.parse(await res.text())
            if (Object.hasOwn(response, 'detail')) {
                return response.detail
            }
        }
    } catch (error) {
        console.error('Error signing in:', error);
    }
    return ''
}