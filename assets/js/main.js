const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', (e) => {
    const el = e.target
    const tag = el.tagName.toLowerCase()
    console.log(el, tag)

    if (tag === 'a') {
        e.preventDefault()
        loagPage(el)
    }
})

const loagPage = async (el) => {
    const href = el.getAttribute('href')
    console.log(href)

    const objConfig = {
        method: 'GET',
        url: href,
    }

    try {
        const response = await request(objConfig)
        loadResult(response)
    } catch (err) {
        console.log(err)
    }
}

const loadResult = (response) => {
    const result = document.querySelector('.result')
    result.innerHTML = response
}