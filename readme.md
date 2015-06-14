# Ricochet

An HTTP request translator

## Example Usage

http://ricochet.link/?method=post&name=jesse&age=26&uri=http://reqr.es/api/users

Will make a POST request to http://reqr.es/api/users with these form parameters:

```js
{
  name: "jesse",
  age: 26
}
```