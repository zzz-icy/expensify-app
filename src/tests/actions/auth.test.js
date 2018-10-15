import { login, logout } from '../../actions/auth';

test('should generate login action', () => {
    const uid = '123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
})

test('should generate logout action', () => {
    const uid = '123';
    const action = logout(uid);
    expect(action).toEqual({
        type: 'LOGOUT',
    });
})