// ============================================
// DARKFORGE-667 - KEY VERIFICATION SYSTEM
// OWNER: SANZMODZ - MANUAL VALIDATION ONLY
// KEY: 5544 (USER) | 667 (OWNER)
// ============================================

const KEY_SYSTEM = {
    // Master keys - HANYA INI YANG VALID
    validKeys: {
        '5544': 'user',
        '667': 'owner'
    },
    
    // Key metadata
    keyInfo: {
        '5544': {
            level: 'user',
            description: 'Standard User Access',
            generated: '2026-01-01',
            expires: 'never'
        },
        '667': {
            level: 'owner',
            description: 'SANZMODZ - Absolute Owner',
            generated: '2026-01-01',
            expires: 'never'
        }
    },
    
    // Verify key
    verify: function(key) {
        if (this.validKeys[key]) {
            return {
                valid: true,
                level: this.validKeys[key],
                info: this.keyInfo[key] || { level: this.validKeys[key] }
            };
        }
        return {
            valid: false,
            level: null,
            info: null
        };
    },
    
    // Log attempt (simulasi)
    logAttempt: function(key, ip = 'unknown', success = false) {
        console.log(`[KEY_ATTEMPT] Key: ${key}, IP: ${ip}, Success: ${success}`);
        // Di versi full, ini bisa kirim ke server
    }
};

// Manual verification function - HARUS DIPANGGIL MANUAL
window.verifyKeyManual = function(key) {
    const result = KEY_SYSTEM.verify(key);
    if (result.valid) {
        console.log(`%c✅ KEY VALID: ${key} (${result.level})`, 'color: #00ff00; font-size: 16px;');
    } else {
        console.log(`%c❌ KEY INVALID: ${key}`, 'color: #ff0000; font-size: 16px;');
    }
    return result;
};

// EXPOSE KE GLOBAL
window.KEY_SYSTEM = KEY_SYSTEM;

// Sembunyikan key dari inspect element? 
// Tidak perlu, karena key sudah di-hardcode dan hanya 2.
// Yang penting adalah MANUAL VERIFICATION, bukan otomatis.