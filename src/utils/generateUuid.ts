export const  generateUUID = () =>{
    if (crypto && crypto.getRandomValues) {
        // 使用crypto API生成UUID
        const array = new Uint32Array(4);
        crypto.getRandomValues(array);
        return array.join('-');
    } else {
        // Fallback，使用简单的方式生成UUID
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}


